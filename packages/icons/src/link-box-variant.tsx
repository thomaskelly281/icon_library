import { mdiLinkBoxVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkBoxVariant(props: IconComponentProps) {
  return <Icon path={mdiLinkBoxVariant} {...props} />;
}

export { mdiLinkBoxVariant as path };
