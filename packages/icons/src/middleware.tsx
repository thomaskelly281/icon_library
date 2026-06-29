import { mdiMiddleware } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Middleware(props: IconComponentProps) {
  return <Icon path={mdiMiddleware} {...props} />;
}

export { mdiMiddleware as path };
