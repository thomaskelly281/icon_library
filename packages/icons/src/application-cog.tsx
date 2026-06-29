import { mdiApplicationCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationCog(props: IconComponentProps) {
  return <Icon path={mdiApplicationCog} {...props} />;
}

export { mdiApplicationCog as path };
