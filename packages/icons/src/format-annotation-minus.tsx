import { mdiFormatAnnotationMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatAnnotationMinus(props: IconComponentProps) {
  return <Icon path={mdiFormatAnnotationMinus} {...props} />;
}

export { mdiFormatAnnotationMinus as path };
