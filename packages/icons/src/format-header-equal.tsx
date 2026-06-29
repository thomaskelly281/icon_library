import { mdiFormatHeaderEqual } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatHeaderEqual(props: IconComponentProps) {
  return <Icon path={mdiFormatHeaderEqual} {...props} />;
}

export { mdiFormatHeaderEqual as path };
