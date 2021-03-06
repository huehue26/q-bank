import { useRouter } from "next/router";
import { useAuth } from "./AuthContext";

export function protectedRoute(Component) {
  return function ProtectedRoute(props) {
    // const { currentUser } = useAuth();
    const currentUser = true;
    const route = useRouter();

    if (!currentUser) {
      route.replace("/user/login");
      return (
        <div className="w-full h-full flex justify-center items-center">
          Loading...
        </div>
      );
    }
    return <Component {...props} />;
  };
}

export function publicRoute(Component) {
  return function PublicRoute(props) {
    // const { currentUser } = useAuth();
    const currentUser = false;

    const route = useRouter();

    if (currentUser) {
      route.replace("/");
      return (
        <div className="w-full h-full flex justify-center items-center">
          Loading...
        </div>
      );
    }
    return <Component {...props} />;
  };
}
