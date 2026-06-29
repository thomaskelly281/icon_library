import { mdiFormatSection } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatSection(props: IconComponentProps) {
  return <Icon path={mdiFormatSection} {...props} />;
}

export { mdiFormatSection as path };
