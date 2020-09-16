import { Location } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';
// import * as CryptoJS from 'crypto-js';
import { NgxSpinnerService } from "ngx-spinner";
// import { MyTranslatorPipe } from '../custom-pipes/my-translator.pipe';
import { AppConstants, AlertType } from '../constants';
// import * as XLSX from 'xlsx';
// import { UploadFileDetails } from '../model/upload-file-details';
import { MatDialog } from '@angular/material/dialog';
// import { MessageModalComponent } from '../pms-base/message-modal/message-modal.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
// import { IconsnackBarComponent } from '../pms-base/iconsnack-bar/iconsnack-bar.component';
// import { UploadFileOperationType } from '../model/upload-file-operation-type.enum';
// import { UploadFileStorageType } from '../model/upload-file-storage-type.enum';
import { AbstractControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  fieldTouched = false;
  selectedFileFormatType: string;
  FileFormat: any;
  validDocument: any;
  userDtls: any;


  constructor(
    private spinner: NgxSpinnerService,
    private location: Location, private route: Router,
    // private myTranslatePipe: MyTranslatorPipe,
    public dialog: MatDialog,
    private snackBar: MatSnackBar

  ) {
    // this.userDtls = JSON.parse(this.getSessionData(AppConstants.LOCAL_STORAGE.MENU_INDEX));
  }

  /**
   * navigation to previous page
   */
  public goBack(): void {
    this.location.back();
  }

  /**
   * navigation to home page
   */
  public goHome(): void {
    this.route.navigated = false;
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.route.navigateByUrl('/home');
  }
  /**
   *
   * @param Show Loader
   */
  public showLoadingIndicator() {
    this.spinner.show(undefined, { type: 'timer' });
  }
  public showLogOutLoadingIndicator(msg) {
    this.spinner.show(msg, { type: 'timer' });
  }
  public spaceValidator(control: AbstractControl) {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {

      control.setValue('');

      return { required: true }
    }
    else {
      return null;
    }
  }
  /**
   *
   * @param Show Loader
   */
  public dismissLoadingIndicator() {
    this.spinner.hide();
  }
  public showSnackBar(message, icon) {
    // this.snackBar.openFromComponent(IconsnackBarComponent, {
    //   duration: 4000,
    //   data: { message: message, icon: icon }
    // });
  }
  public goToPage(url: string): void {

    this.route.navigateByUrl(url);

  }

  public translateFilter(value: string) {
    // return this.myTranslatePipe.transform(value);
  }
  public goToPageWithExtras(url: string, value: any): void {
    // let encryprtedData = this.encrypt(value);
    let navigationExtras: NavigationExtras = {
      state: {
        data: value
      },
      preserveQueryParams: true,
    };
    history.pushState(value, '', url);
    this.route.navigate([url], navigationExtras);
  }

  /**
   * fetch local data with key
   * @param key
   */
  public getLocalData(key: string): any {
    return localStorage.getItem(key)
  }
  public getSessionData(key: string): any {
    return sessionStorage.getItem(key)
  }
  /**
   * store local data with key,value
   * @param key
   * @param value
   */
  public storeLocalData(key: string, value: any) {
    return localStorage.setItem(key, value);
  }
  public storeSessionData(key: string, value: any) {

    return sessionStorage.setItem(key, value);
  }
  public clearSessionData() {
    return sessionStorage.clear();
  }

  /**
 * decode encrypted string returns JSON if json response,else plain data
 * @param encryptedString
 */
  // decrypt(encryptedString: string) {

  //   var key = CryptoJS.enc.Base64.parse(AppConstants.BASE64KEY);
  //   var decryptedData = CryptoJS.AES.decrypt(encryptedString, key, {
  //     padding: CryptoJS.pad.Pkcs7,
  //     iv: CryptoJS.enc.Base64.parse(AppConstants.BASEIVKEY)
  //   });
  //   var result = null;

  //   //#region checking whether data is encrypted,else return plain data
  //   try {

  //     result = decryptedData.toString(CryptoJS.enc.Utf8);

  //   }
  //   catch (e) {
  //     result = encryptedString;

  //   }
  //   //#endregion

  //   //#region checking whether data is json or not, else returning plain data
  //   try {
  //     result = JSON.parse(result);
  //   }
  //   catch (e) {
  //   }
  //#endregion

  //   return result;
  // }

  /**
   *
   * @param plainString
   */
  // encrypt(plainString: string) {

  //   var key = CryptoJS.enc.Base64.parse(AppConstants.BASE64KEY);
  //   var encryprtedData = CryptoJS.AES.encrypt(plainString, key, {
  //     mode: CryptoJS.mode.ECB,
  //     padding: CryptoJS.pad.Pkcs7
  //   });
  //   return encryprtedData.toString();
  // }

  printLog(printText: string) {
    if (!environment.production) {
      console.log(printText);
    }
  }


  // readExcel2Json(evt) {
  //   let uploadDtls = new UploadFileDetails();
  //   const target: DataTransfer = <DataTransfer>(evt.target);
  //   uploadDtls.Name = target.files[0].name;
  //   const reader: FileReader = new FileReader();
  //   return new Promise((resolve, reject) => {
  //     reader.onload = (e: any) => {
  //       /* read workbook */

  //       const bstr = e.target.result;
  //       let array = new Uint8Array(bstr);
  //       let bytearray = Array.from(array);

  //       //uploadDtls.Data=bytearray;

  //       resolve(uploadDtls);
  //     };
  //     reader.readAsArrayBuffer(target.files[0]);

  //   });


  // }

  downloadFile(fileName: string, baseStr: string) {
    var mimeType = null;

    if (fileName != null) {
      var extensionArr = fileName.split(".");
      if (extensionArr != null && extensionArr.length > 1) {
        var ext = extensionArr[1];

        mimeType = AppConstants.MIMETypes[ext.toUpperCase()];
      }
    }
    if (mimeType == null) {
      this.showSnackBar('Unsupported Media Type', AppConstants.ERROR_ICON)
      // this.showMessage(AlertType.FAILURE, this.myTranslatePipe.transform("UnsupportedContentType"));
      return;
    }


    var byteCharacters = atob(baseStr);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var file = new Blob([byteArray], { type: mimeType + ';base64' });
    var a = document.createElement("a");
    var fileURL = URL.createObjectURL(file);
    a.href = fileURL;
    a.download = fileName;
    a.click();
    // window.open(fileURL);


  }

  // public readFiles(event, bulkMasterId) {

  //   let userDtls = JSON.parse(this.getSessionData(AppConstants.LOCAL_STORAGE.MENU_INDEX));
  //   let file = event.target.files[0];
  //   let fileName = event.target.files[0].name;
  //   this.selectedFileFormatType = "." + fileName.split('.').pop().toLowerCase();
  //   if (bulkMasterId != 0) {
  //     if (this.selectedFileFormatType != AppConstants.FILE_FORMAT_TYPES.XLSX && this.selectedFileFormatType != AppConstants.FILE_FORMAT_TYPES.xls) {
  //       this.dismissLoadingIndicator();
  //       this.showSnackBar("Invalid Document Please Upload a Excel file", AppConstants.ERROR_ICON);
  //       return;
  //     }
  //   }

  //   var milliseconds = new Date().getTime();
  //   let fileType = event.target.files[0].type;
  //   return new Promise((resolve, reject) => {
  //     var fr = new FileReader();
  //     fr.onload = () => {
  //       let uploadDtls = new UploadFileDetails();
  //       uploadDtls.base64 = fr.result.toString().split(',')[1];
  //       let fileArray = fileName.split('.')

  //       uploadDtls.fileName = fileArray[0] + '_' + userDtls.employeeDetails.EmployeeId + '_' + milliseconds + '.' + fileArray[1];
  //       uploadDtls.uploadFileOperationType = UploadFileOperationType.INSERT;
  //       uploadDtls.uploadFileStorageType = UploadFileStorageType.AMAZONS3;
  //       uploadDtls.bulkUploadMasterId = bulkMasterId;
  //       uploadDtls.directoryName = "";
  //       uploadDtls.fileType = fileType;
  //       uploadDtls.bucketName = AppConstants.BULK_UPLOAD_BUCKETNAME;
  //       resolve(uploadDtls);
  //     };
  //     fr.readAsDataURL(file);
  //   });

  // }
  onKeypressOnlyAlphabetic(event: any) {

    const inputChar = event.target.value;
    let regExp = /[^ a-zA-Z]/g;
    if (regExp.test(inputChar)) {
      event.target.value = inputChar.replace(regExp, '')
    }


  }
  // exportAsExcelFile(json: any[], excelFileName: string): void {
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  //   const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  //   const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
  //   XLSX.writeFile(workbook, excelFileName)
  //   // this.downloadFile(excelFileName,excelBuffer);
  // }
  // onKeypressOnlyAlphabeticNumeric(event: any) {

  //   const inputChar = event.target.value;
  //   let regExp = /[^ a-zA-Z0-9]/g;
  //   if (regExp.test(inputChar)) {
  //     event.target.value = inputChar.replace(regExp, '')
  //   }


  // }
  onKeypressOnlyNumeric(event: any) {

    const inputChar = event.target.value;
    let regExp = /[^ 0-9]/g;
    if (regExp.test(inputChar)) {
      event.target.value = inputChar.replace(regExp, '');
    }


  }
  onKeypressOnlyNumericDecimal(event: any) {

    const inputChar = event.target.value;
    let regExp = /[^ 0-9.]/g;
    if (regExp.test(inputChar)) {
      event.target.value = inputChar.replace(regExp, '');
    }


  }


}
