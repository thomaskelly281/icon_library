import { mdiFormatColumns } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatColumns(props: IconComponentProps) {
  return <Icon path={mdiFormatColumns} {...props} />;
}

export { mdiFormatColumns as path };
