import { mdiFormatListChecks } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatListChecks(props: IconComponentProps) {
  return <Icon path={mdiFormatListChecks} {...props} />;
}

export { mdiFormatListChecks as path };
