import {
    createContext,
    useState,
    ReactNode,
    useContext,
    useEffect,
  } from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  
  export type TicketDetailType = {
    first_name: string
    last_name: string
    date_of_birth: string;
    sex: string;
    nationality: string
  }

  // Define the UserContext type
  type UserContextType = {
    selected_bday: string;
    setUserDetails: (details: Partial<UserContextType>) => void;
  };
  
  // Define the default context values
  const defaultUserContext: UserContextType = {
    selected_bday: "",
    setUserDetails: () => {},
  };
  
  // Create the UserContext
  const UserContext = createContext<UserContextType>(defaultUserContext);
  
  // Create the UserProvider component
  export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userDetails, setUserDetailsState] =
      useState<UserContextType>(defaultUserContext);
  
    // Load user details from AsyncStorage when the component mounts
    useEffect(() => {
      const loadUserData = async () => {
        try {
          const savedUserData = await AsyncStorage.getItem("userDetails");
          if (savedUserData) {
            setUserDetailsState((prev) => ({
              ...prev,
              ...JSON.parse(savedUserData),
            }));
          }
        } catch (e) {
          console.error("Failed to load user data:", e);
        }
      };
  
      loadUserData();
    }, []);
  
    // Function to update user details and save them in AsyncStorage
    const setUserDetails = async (details: Partial<UserContextType>) => {
      const updatedUserDetails = { ...userDetails, ...details };
  
      // Check if the details have changed before updating
      if (JSON.stringify(updatedUserDetails) !== JSON.stringify(userDetails)) {
        try {
          setUserDetailsState(updatedUserDetails as UserContextType);
          await AsyncStorage.setItem(
            "userDetails",
            JSON.stringify(updatedUserDetails)
          );
        } catch (e) {
          console.error("Failed to save user data:", e);
        }
      }
    };
  
    return (
      <UserContext.Provider value={{ ...userDetails, setUserDetails }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  // Custom hook to use the UserContext
  export const useUserContext = () => useContext(UserContext);
  