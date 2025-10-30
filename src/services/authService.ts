import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from "@/consts/storage_keys";

export type UserStatus = 'new_user' | 'locked' | 'authenticated'

export class AuthService {
  static async checkUserStatus(): Promise<UserStatus> {
    try {
      const wrapped_MDK = await AsyncStorage.getItem(STORAGE_KEYS.WRAPPED_MDK);
      return wrapped_MDK ? "locked" : "new_user"
    } catch (error) {
      return "new_user"
    }
  }
}



export function useAppInitialization() {
  const [status, setStatus] = useState<UserStatus | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    CheckStatus()
  }, [])
  async function CheckStatus() {
    try {
      const userStatus = await AuthService.checkUserStatus();
      setStatus(userStatus)
      setStatus("locked")
    } catch (error) {
      console.error("Error in loading user")
      setStatus("new_user")
    } finally {
      setIsLoading(false);
    }
  }
  return {
    status,
    isLoading
  }
}   
