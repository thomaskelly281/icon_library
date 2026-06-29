import { mdiFormatWrapTight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatWrapTight(props: IconComponentProps) {
  return <Icon path={mdiFormatWrapTight} {...props} />;
}

export { mdiFormatWrapTight as path };
