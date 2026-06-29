import { mdiTranslateVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TranslateVariant(props: IconComponentProps) {
  return <Icon path={mdiTranslateVariant} {...props} />;
}

export { mdiTranslateVariant as path };
