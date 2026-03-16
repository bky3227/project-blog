export interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface SignUpFormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface SignUpErrors {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
}

export interface LogInFormData {
  email: string;
  password: string;
}

export interface LogInErrors {
  email?: string;
  password?: string;
}

export interface RegisterResponse {
  message: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  description: string;
  likes: number;
}

export interface CommentProps {
  setDialogState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CreateAccountModalProps {
  dialogState: boolean;
  setDialogState: React.Dispatch<React.SetStateAction<boolean>>;
}
