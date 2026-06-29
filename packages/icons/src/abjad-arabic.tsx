import { mdiAbjadArabic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AbjadArabic(props: IconComponentProps) {
  return <Icon path={mdiAbjadArabic} {...props} />;
}

export { mdiAbjadArabic as path };
