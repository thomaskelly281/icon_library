import { mdiCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cog(props: IconComponentProps) {
  return <Icon path={mdiCog} {...props} />;
}

export { mdiCog as path };
