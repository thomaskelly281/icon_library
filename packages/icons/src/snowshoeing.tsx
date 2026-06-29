import { mdiSnowshoeing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Snowshoeing(props: IconComponentProps) {
  return <Icon path={mdiSnowshoeing} {...props} />;
}

export { mdiSnowshoeing as path };
