import { mdiSnowboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Snowboard(props: IconComponentProps) {
  return <Icon path={mdiSnowboard} {...props} />;
}

export { mdiSnowboard as path };
