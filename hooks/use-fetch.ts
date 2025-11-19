import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb: (...args: any[]) => Promise<{ industry: string | null; bio: string | null; experience: number | null; skills: string[]; email: string; id: string; name: string | null; clerkUserId: string; imageUrl: string | null; createdAt: Date; updatedAt: Date; }> | any) => {
  const [data, setData] = useState<any | undefined>(undefined);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<any | null>(null);

  const fn = async (...args: any[]) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
    } catch (error: any) {
      setError(error);
      toast.error(error?.message ?? String(error));
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;