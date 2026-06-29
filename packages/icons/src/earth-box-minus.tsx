import { mdiEarthBoxMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthBoxMinus(props: IconComponentProps) {
  return <Icon path={mdiEarthBoxMinus} {...props} />;
}

export { mdiEarthBoxMinus as path };
