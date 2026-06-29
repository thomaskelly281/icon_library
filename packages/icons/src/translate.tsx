import { mdiTranslate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Translate(props: IconComponentProps) {
  return <Icon path={mdiTranslate} {...props} />;
}

export { mdiTranslate as path };
