import { mdiFormatHeaderPound } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatHeaderPound(props: IconComponentProps) {
  return <Icon path={mdiFormatHeaderPound} {...props} />;
}

export { mdiFormatHeaderPound as path };
