import { mdiSnowmobile } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Snowmobile(props: IconComponentProps) {
  return <Icon path={mdiSnowmobile} {...props} />;
}

export { mdiSnowmobile as path };
