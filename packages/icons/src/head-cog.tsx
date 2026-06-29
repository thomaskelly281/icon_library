import { mdiHeadCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadCog(props: IconComponentProps) {
  return <Icon path={mdiHeadCog} {...props} />;
}

export { mdiHeadCog as path };
