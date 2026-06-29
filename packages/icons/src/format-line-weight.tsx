import { mdiFormatLineWeight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatLineWeight(props: IconComponentProps) {
  return <Icon path={mdiFormatLineWeight} {...props} />;
}

export { mdiFormatLineWeight as path };
