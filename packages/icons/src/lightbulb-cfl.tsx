import { mdiLightbulbCfl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbCfl(props: IconComponentProps) {
  return <Icon path={mdiLightbulbCfl} {...props} />;
}

export { mdiLightbulbCfl as path };
