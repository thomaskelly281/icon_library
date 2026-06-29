import { mdiFormatTextVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatTextVariant(props: IconComponentProps) {
  return <Icon path={mdiFormatTextVariant} {...props} />;
}

export { mdiFormatTextVariant as path };
