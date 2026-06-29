import { mdiStarSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarSettings(props: IconComponentProps) {
  return <Icon path={mdiStarSettings} {...props} />;
}

export { mdiStarSettings as path };
