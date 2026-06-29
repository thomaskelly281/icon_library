import { mdiCompass } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Compass(props: IconComponentProps) {
  return <Icon path={mdiCompass} {...props} />;
}

export { mdiCompass as path };
