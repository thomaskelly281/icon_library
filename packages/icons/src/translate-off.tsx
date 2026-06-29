import { mdiTranslateOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TranslateOff(props: IconComponentProps) {
  return <Icon path={mdiTranslateOff} {...props} />;
}

export { mdiTranslateOff as path };
