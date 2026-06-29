import { mdiTextSearchVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextSearchVariant(props: IconComponentProps) {
  return <Icon path={mdiTextSearchVariant} {...props} />;
}

export { mdiTextSearchVariant as path };
