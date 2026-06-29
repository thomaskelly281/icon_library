import { mdiSnowflakeMelt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SnowflakeMelt(props: IconComponentProps) {
  return <Icon path={mdiSnowflakeMelt} {...props} />;
}

export { mdiSnowflakeMelt as path };
