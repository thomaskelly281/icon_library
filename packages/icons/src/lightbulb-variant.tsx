import { mdiLightbulbVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbVariant(props: IconComponentProps) {
  return <Icon path={mdiLightbulbVariant} {...props} />;
}

export { mdiLightbulbVariant as path };
