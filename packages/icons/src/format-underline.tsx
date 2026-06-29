import { mdiFormatUnderline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatUnderline(props: IconComponentProps) {
  return <Icon path={mdiFormatUnderline} {...props} />;
}

export { mdiFormatUnderline as path };
