import { mdiInformationSlabSymbol } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationSlabSymbol(props: IconComponentProps) {
  return <Icon path={mdiInformationSlabSymbol} {...props} />;
}

export { mdiInformationSlabSymbol as path };
