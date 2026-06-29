import { mdiRouter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Router(props: IconComponentProps) {
  return <Icon path={mdiRouter} {...props} />;
}

export { mdiRouter as path };
