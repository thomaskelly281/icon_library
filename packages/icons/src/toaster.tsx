import { mdiToaster } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Toaster(props: IconComponentProps) {
  return <Icon path={mdiToaster} {...props} />;
}

export { mdiToaster as path };
