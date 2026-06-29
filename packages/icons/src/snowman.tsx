import { mdiSnowman } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Snowman(props: IconComponentProps) {
  return <Icon path={mdiSnowman} {...props} />;
}

export { mdiSnowman as path };
