import { mdiFormatListBulleted } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatListBulleted(props: IconComponentProps) {
  return <Icon path={mdiFormatListBulleted} {...props} />;
}

export { mdiFormatListBulleted as path };
