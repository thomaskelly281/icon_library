import { mdiStool } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Stool(props: IconComponentProps) {
  return <Icon path={mdiStool} {...props} />;
}

export { mdiStool as path };
