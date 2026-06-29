import { mdiCellphoneScreenshot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneScreenshot(props: IconComponentProps) {
  return <Icon path={mdiCellphoneScreenshot} {...props} />;
}

export { mdiCellphoneScreenshot as path };
