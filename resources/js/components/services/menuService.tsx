import { useQuery, useMutation, useQueryClient, UseQueryResult, UseMutationResult } from 'react-query';
import axios from 'axios';

interface MenuItem {
  id: number;
  name: string;
  parent_id?: number;
  // Add other properties that are returned by your API
}

// Fetch all menus (Read - Index)
export const useMenus = (): UseQueryResult<MenuItem[]> => {
  return useQuery<MenuItem[]>('menus', async () => {
    const { data } = await axios.get<MenuItem[]>('/api/menus');
    return data;
  });
};

// Fetch a single menu by ID (Read - Show)
export const useMenu = (id: number): UseQueryResult<MenuItem> => {
  return useQuery<MenuItem>(['menu', id], async () => {
    const { data } = await axios.get<MenuItem>(`/api/menus/${id}`);
    return data;
  });
};

// Create a new menu (Create)
export const useCreateMenu = (): UseMutationResult<MenuItem, unknown, Partial<MenuItem>> => {
  const queryClient = useQueryClient();
  
  return useMutation<MenuItem, unknown, Partial<MenuItem>>(async (newMenu) => {
    const { data } = await axios.post<MenuItem>('/api/menus', newMenu);
    return data;
  }, {
    onSuccess: () => {
      // Invalidate and refetch menus after creation
      queryClient.invalidateQueries('menus');
    }
  });
};

// Update an existing menu by ID (Update)
export const useUpdateMenu = (id: number): UseMutationResult<MenuItem, unknown, Partial<MenuItem>> => {
  const queryClient = useQueryClient();
  
  return useMutation<MenuItem, unknown, Partial<MenuItem>>(async (updatedMenu) => {
    const { data } = await axios.put<MenuItem>(`/api/menus/${id}`, updatedMenu);
    return data;
  }, {
    onSuccess: () => {
      // Invalidate and refetch menus after updating
      queryClient.invalidateQueries('menus');
      queryClient.invalidateQueries(['menu', id]);
    }
  });
};

// Delete a menu by ID (Delete)
export const useDeleteMenu = (id: number): UseMutationResult<void, unknown, void> => {
  const queryClient = useQueryClient();
  
  return useMutation<void, unknown, void>(async () => {
    await axios.delete(`/api/menus/${id}`);
  }, {
    onSuccess: () => {
      // Invalidate and refetch menus after deletion
      queryClient.invalidateQueries('menus');
    }
  });
};
