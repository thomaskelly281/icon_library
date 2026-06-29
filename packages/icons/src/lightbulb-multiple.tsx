import { mdiLightbulbMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbMultiple(props: IconComponentProps) {
  return <Icon path={mdiLightbulbMultiple} {...props} />;
}

export { mdiLightbulbMultiple as path };
