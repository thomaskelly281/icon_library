import { mdiFormatOverline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatOverline(props: IconComponentProps) {
  return <Icon path={mdiFormatOverline} {...props} />;
}

export { mdiFormatOverline as path };
