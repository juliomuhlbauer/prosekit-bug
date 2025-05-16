import { Provider } from "@/components/ui/provider";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Provider>
        <Outlet />
      </Provider>
      <TanStackRouterDevtools />
    </>
  ),
});
