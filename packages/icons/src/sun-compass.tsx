import { mdiSunCompass } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SunCompass(props: IconComponentProps) {
  return <Icon path={mdiSunCompass} {...props} />;
}

export { mdiSunCompass as path };
