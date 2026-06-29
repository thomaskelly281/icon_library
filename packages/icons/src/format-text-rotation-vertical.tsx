import { mdiFormatTextRotationVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatTextRotationVertical(props: IconComponentProps) {
  return <Icon path={mdiFormatTextRotationVertical} {...props} />;
}

export { mdiFormatTextRotationVertical as path };
