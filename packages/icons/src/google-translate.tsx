import { mdiGoogleTranslate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleTranslate(props: IconComponentProps) {
  return <Icon path={mdiGoogleTranslate} {...props} />;
}

export { mdiGoogleTranslate as path };
