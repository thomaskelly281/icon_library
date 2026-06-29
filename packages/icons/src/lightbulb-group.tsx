import { mdiLightbulbGroup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbGroup(props: IconComponentProps) {
  return <Icon path={mdiLightbulbGroup} {...props} />;
}

export { mdiLightbulbGroup as path };
