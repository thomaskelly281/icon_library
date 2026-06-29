import { mdiFormatAnnotationPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatAnnotationPlus(props: IconComponentProps) {
  return <Icon path={mdiFormatAnnotationPlus} {...props} />;
}

export { mdiFormatAnnotationPlus as path };
