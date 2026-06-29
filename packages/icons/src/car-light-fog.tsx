import { mdiCarLightFog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarLightFog(props: IconComponentProps) {
  return <Icon path={mdiCarLightFog} {...props} />;
}

export { mdiCarLightFog as path };
