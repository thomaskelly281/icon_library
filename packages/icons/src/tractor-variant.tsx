import { mdiTractorVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TractorVariant(props: IconComponentProps) {
  return <Icon path={mdiTractorVariant} {...props} />;
}

export { mdiTractorVariant as path };
